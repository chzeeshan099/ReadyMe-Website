import FormField from "./FormField";
import StepActions from "./StepActions";
import SubjectSelector from "./SubjectSelector";

export default function ExamInfoStep({
  values,
  errors,
  onChange,
  onToggleSubject,
  onBack,
  onSubmit,
  isSubmitting,
  submitError,
  examSessions,
  levelOptions,
  levelStageOptions,
  subjectOptions,
}) {
  return (
    <div className="glass rounded-[32px] p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          id="examSession"
          label="Paper Date / Exam Session"
          as="select"
          value={values.examSession}
          onChange={(event) => onChange("examSession", event.target.value)}
          error={errors.examSession}
          placeholder="Select exam session"
          options={examSessions}
        />

        <FormField
          id="level"
          label="Level"
          as="select"
          value={values.level}
          onChange={(event) => onChange("level", event.target.value)}
          error={errors.level}
          placeholder="Select level"
          options={levelOptions.map((level) => ({
            label: level,
            value: level,
          }))}
        />

        <FormField
          id="levelStage"
          label="Year / Stage"
          as="select"
          value={values.levelStage}
          onChange={(event) => onChange("levelStage", event.target.value)}
          error={errors.levelStage}
          placeholder={
            values.level ? "Select year / stage" : "Select level first"
          }
          options={levelStageOptions.map((stage) => ({
            label: stage,
            value: stage,
          }))}
        />

        <div className="md:col-span-2">
          <SubjectSelector
            subjects={subjectOptions}
            selectedSubjects={values.subjects}
            onToggle={onToggleSubject}
            error={errors.subjects}
          />
        </div>
      </div>

      {submitError ? (
        <div className="mt-5 rounded-[20px] border border-[#ff6d87]/30 bg-[#ff6d87]/10 px-4 py-3 text-sm text-[#ffc1cb]">
          {submitError}
        </div>
      ) : null}

      <StepActions
        onBack={onBack}
        onNext={onSubmit}
        nextLabel="Submit"
        nextLoading={isSubmitting}
      />
    </div>
  );
}
