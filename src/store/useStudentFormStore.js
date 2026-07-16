import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { levelStages } from "@/data/examFormOptions";

const MIN_STEP = 1;
const MAX_STEP = 3;

const getInitialFormData = () => ({
  studentInfo: {
    studentName: "",
    whatsappNumber: "",
    email: "",
  },
  schoolInfo: {
    schoolName: "",
    grade: "",
  },
  examInfo: {
    examSession: "",
    subjects: [],
    level: "",
    levelStage: "",
  },
});

const clampStep = (step) => Math.min(Math.max(step, MIN_STEP), MAX_STEP);

export const useStudentFormStore = create(
  persist(
    (set) => ({
      currentStep: 1,
      formData: getInitialFormData(),
      hasHydrated: false,

      setCurrentStep: (step) =>
        set(() => ({
          currentStep: clampStep(step),
        })),

      nextStep: () =>
        set((state) => ({
          currentStep: clampStep(state.currentStep + 1),
        })),

      previousStep: () =>
        set((state) => ({
          currentStep: clampStep(state.currentStep - 1),
        })),

      updateStudentInfo: (payload) =>
        set((state) => ({
          formData: {
            ...state.formData,
            studentInfo: {
              ...state.formData.studentInfo,
              ...payload,
            },
          },
        })),

      updateSchoolInfo: (payload) =>
        set((state) => ({
          formData: {
            ...state.formData,
            schoolInfo: {
              ...state.formData.schoolInfo,
              ...payload,
            },
          },
        })),

      updateExamInfo: (payload) =>
        set((state) => {
          const nextExamInfo = {
            ...state.formData.examInfo,
            ...payload,
          };

          if (Object.prototype.hasOwnProperty.call(payload, "level")) {
            const allowedStages = levelStages[payload.level] || [];
            if (!allowedStages.includes(nextExamInfo.levelStage)) {
              nextExamInfo.levelStage = "";
            }
          }

          return {
            formData: {
              ...state.formData,
              examInfo: nextExamInfo,
            },
          };
        }),

      resetForm: () =>
        set(() => ({
          currentStep: 1,
          formData: getInitialFormData(),
          hasHydrated: true,
        })),

      setHasHydrated: (value) =>
        set(() => ({
          hasHydrated: value,
        })),
    }),
    {
      name: "readyme-student-form",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        currentStep: state.currentStep,
        formData: state.formData,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
