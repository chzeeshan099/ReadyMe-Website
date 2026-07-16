import FormField from "./FormField";
import StepActions from "./StepActions";

export default function SchoolInfoStep({
  values,
  errors,
  onChange,
  onBack,
  onNext,
}) {
  return (
    <div className="glass rounded-[32px] p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          id="schoolName"
          label="School Name"
          value={values.schoolName}
          onChange={(event) => onChange("schoolName", event.target.value)}
          error={errors.schoolName}
          placeholder="Enter your school name"
        />

        <FormField
          id="grade"
          label="Grade"
          value={values.grade}
          onChange={(event) => onChange("grade", event.target.value)}
          error={errors.grade}
          placeholder="Enter your grade"
        />
      </div>

      <StepActions onBack={onBack} onNext={onNext} />
    </div>
  );
}
