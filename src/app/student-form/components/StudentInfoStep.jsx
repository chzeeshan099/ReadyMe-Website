import FormField from "./FormField";
import StepActions from "./StepActions";

export default function StudentInfoStep({
  values,
  errors,
  onChange,
  onNext,
}) {
  return (
    <div className="glass rounded-[32px] p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <FormField
            id="studentName"
            label="Student Name"
            value={values.studentName}
            onChange={(event) => onChange("studentName", event.target.value)}
            error={errors.studentName}
            placeholder="Enter your full name"
          />
        </div>

        <FormField
          id="whatsappNumber"
          label="WhatsApp Number"
          value={values.whatsappNumber}
          onChange={(event) => onChange("whatsappNumber", event.target.value)}
          error={errors.whatsappNumber}
          placeholder="03XX XXXXXXX"
          type="tel"
        />

        <FormField
          id="email"
          label="Email Address"
          value={values.email}
          onChange={(event) => onChange("email", event.target.value)}
          error={errors.email}
          placeholder="student@example.com"
          type="email"
        />
      </div>

      <StepActions hideBack nextLabel="Next" onNext={onNext} />
    </div>
  );
}
