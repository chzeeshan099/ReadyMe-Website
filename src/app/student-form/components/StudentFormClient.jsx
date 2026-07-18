"use client";
import { useMemo, useState } from "react";
import {
  examSessions,
  levels,
  levelStages,
  subjects,
} from "@/data/examFormOptions";
import { useStudentFormStore } from "@/store/useStudentFormStore";
import FormProgress from "./FormProgress";
import StudentInfoStep from "./StudentInfoStep";
import SchoolInfoStep from "./SchoolInfoStep";
import ExamInfoStep from "./ExamInfoStep";
import { submitStudentForm } from "../utils/submitStudentForm";
import { toast } from "react-toastify";
import { createPreRegisterUserApi } from "@/apis/pre-register-user";



const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateStudentInfo(values) {
  const errors = {};

  if (!values.studentName.trim()) {
    errors.studentName = "Student name is required.";
  }

  if (!values.whatsappNumber.trim()) {
    errors.whatsappNumber = "WhatsApp number is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

function validateSchoolInfo(values) {
  const errors = {};

  if (!values.schoolName.trim()) {
    errors.schoolName = "School name is required.";
  }

  if (!values.grade.trim()) {
    errors.grade = "Grade is required.";
  }

  return errors;
}

function validateExamInfo(values) {
  const errors = {};

  if (!values.examSession) {
    errors.examSession = "Exam session is required.";
  }

  if (!values.level) {
    errors.level = "Level is required.";
  }

  if (!values.levelStage) {
    errors.levelStage = "Year / stage is required.";
  }

  if (!values.subjects.length) {
    errors.subjects = "Select at least one subject.";
  }

  return errors;
}

export default  function StudentFormClient() {
  const currentStep = useStudentFormStore((state) => state.currentStep);
  const formData = useStudentFormStore((state) => state.formData);
  const hasHydrated = useStudentFormStore((state) => state.hasHydrated);
  const nextStep = useStudentFormStore((state) => state.nextStep);
  const previousStep = useStudentFormStore((state) => state.previousStep);
  const updateStudentInfo = useStudentFormStore((state) => state.updateStudentInfo);
  const updateSchoolInfo = useStudentFormStore((state) => state.updateSchoolInfo);
  const updateExamInfo = useStudentFormStore((state) => state.updateExamInfo);
  const resetForm = useStudentFormStore((state) => state.resetForm);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");


  const levelStageOptions = useMemo(
    () => levelStages[formData.examInfo.level] || [],
    [formData.examInfo.level]
  );

  const finalPayload = useMemo(
    () => ({
      name: formData.studentInfo.studentName,
      whatsappNumber: formData.studentInfo.whatsappNumber,
      email: formData.studentInfo.email,
      school_name: formData.schoolInfo.schoolName,
      grade: formData.schoolInfo.grade,
      exam_session: formData.examInfo.examSession,
      subjects: formData.examInfo.subjects,
      level: formData.examInfo.level,
      level_stage: formData.examInfo.levelStage,
    }),
    [formData]
  );

  function clearFieldError(fieldName) {
    setErrors((current) => {
      if (!current[fieldName]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[fieldName];
      return nextErrors;
    });
  }

  function handleStudentInfoChange(field, value) {
    updateStudentInfo({ [field]: value });
    clearFieldError(field);
  }

  function handleSchoolInfoChange(field, value) {
    updateSchoolInfo({ [field]: value });
    clearFieldError(field);
  }

  function handleExamInfoChange(field, value) {
    updateExamInfo({ [field]: value });
    clearFieldError(field);

    if (field === "level") {
      clearFieldError("levelStage");
    }
  }

  function handleToggleSubject(subject) {
    const currentSubjects = formData.examInfo.subjects;
    const nextSubjects = currentSubjects.includes(subject)
      ? currentSubjects.filter((item) => item !== subject)
      : [...currentSubjects, subject];

    updateExamInfo({ subjects: nextSubjects });
    clearFieldError("subjects");
  }

  function handleStepOneNext() {
    const nextErrors = validateStudentInfo(formData.studentInfo);
    setErrors(nextErrors);

    if (!Object.keys(nextErrors).length) {
      nextStep();
    }
  }

  function handleStepTwoNext() {
    const nextErrors = validateSchoolInfo(formData.schoolInfo);
    setErrors(nextErrors);

    if (!Object.keys(nextErrors).length) {
      nextStep();
    }
  }

  async function handleSubmit() {
    const nextErrors = validateExamInfo(formData.examInfo);
    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length) {
      return;
    }

    try {
      setIsSubmitting(true);
      const {data , error} = await createPreRegisterUserApi(finalPayload);
      console.log(data , 'data_pre_registration')  
      console.log(error , 'error_pre_registration')

      if(data){
        toast.success("Student registered successfully!");
        resetForm();
      }
      if(error){
        toast.error(error)
      }
      setErrors({});
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!hasHydrated) {
    return (
      <div className="glass mx-auto max-w-[980px] rounded-[32px] p-6 md:p-8">
        <p className="theme-text text-lg font-semibold">Loading form...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[980px] space-y-6">
      <div className="text-center">
        <p className="theme-accent text-sm uppercase tracking-[0.34em]">
          Student Registration
        </p>
        <h1 className="theme-text mt-4 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
          Complete your ReadyMe student form
        </h1>
        <p className="theme-muted mx-auto mt-4 max-w-[760px] text-base leading-8 sm:text-lg">
          Fill your student, school, and exam details in three simple steps.
          Your progress stays saved during refresh and clears automatically once
          the tab is closed.
        </p>
      </div>

      <FormProgress currentStep={currentStep} />

      {currentStep === 1 ? (
        <StudentInfoStep
          values={formData.studentInfo}
          errors={errors}
          onChange={handleStudentInfoChange}
          onNext={handleStepOneNext}
        />
      ) : null}

      {currentStep === 2 ? (
        <SchoolInfoStep
          values={formData.schoolInfo}
          errors={errors}
          onChange={handleSchoolInfoChange}
          onBack={previousStep}
          onNext={handleStepTwoNext}
        />
      ) : null}

      {currentStep === 3 ? (
        <ExamInfoStep
          values={formData.examInfo}
          errors={errors}
          onChange={handleExamInfoChange}
          onToggleSubject={handleToggleSubject}
          onBack={previousStep}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submitError={submitError}
          examSessions={examSessions}
          levelOptions={levels}
          levelStageOptions={levelStageOptions}
          subjectOptions={subjects}
        />
      ) : null}
    </div>
  );
}
