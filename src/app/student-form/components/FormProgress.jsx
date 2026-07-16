const stepLabels = [
  "Student Information",
  "School Information",
  "Exam Information",
];

export default function FormProgress({ currentStep }) {
  const progress = (currentStep / stepLabels.length) * 100;

  return (
    <div className="glass rounded-[30px] p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="theme-accent text-sm uppercase tracking-[0.32em]">
            Step {currentStep} of {stepLabels.length}
          </p>
          <h2 className="theme-text mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
            {stepLabels[currentStep - 1]}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 self-start sm:w-[290px]">
          {stepLabels.map((label, index) => {
            const stepNumber = index + 1;
            const active = currentStep === stepNumber;
            const complete = currentStep > stepNumber;

            return (
              <div
                key={label}
                className={`rounded-[20px] border px-3 py-3 text-center transition ${
                  active || complete
                    ? "border-[#1d62ff] bg-[linear-gradient(180deg,rgba(12,66,255,0.18),rgba(7,18,38,0.95))] text-white"
                    : "border-white/10 bg-white/[0.03] text-white/55"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                  0{stepNumber}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/6">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#6D28FF_0%,#0B7BFF_100%)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
