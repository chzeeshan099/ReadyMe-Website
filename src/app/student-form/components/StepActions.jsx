export default function StepActions({
  backLabel = "Back",
  nextLabel = "Next",
  onBack,
  onNext,
  nextDisabled = false,
  nextLoading = false,
  hideBack = false,
}) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        {!hideBack ? (
          <button
            type="button"
            onClick={onBack}
            className="theme-button-secondary inline-flex min-h-12 items-center justify-center rounded-[18px] px-5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50"
          >
            {backLabel}
          </button>
        ) : null}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled || nextLoading}
        className="inline-flex min-h-12 items-center justify-center rounded-[18px] bg-gradient-to-r from-[#6D28FF] to-[#0B7BFF] px-6 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(17,85,255,0.24)] transition duration-200 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-55"
      >
        {nextLoading ? "Submitting..." : nextLabel}
      </button>
    </div>
  );
}
