// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

export const AriaFormError = ({
  ariaDescribedById,
  errors,
}: {
  /**
   * An array of error messages to display.
   */
  errors: string[] | undefined;
  /**
   * The id of the element that the error message is describing.
   * This must match the `aria-describedby` attribute of the related form element.
   */
  ariaDescribedById: string;
}) => {
  return (
    <div id={ariaDescribedById} aria-live="polite" aria-atomic="true">
      {errors &&
        errors?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
};
