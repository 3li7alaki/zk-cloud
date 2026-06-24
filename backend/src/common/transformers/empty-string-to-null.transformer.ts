import { Transform } from 'class-transformer';

/**
 * Transforms empty strings to null
 * Usage: @EmptyStringToNull() on class property
 */
export function EmptyStringToNull() {
  return Transform(({ value }: { value: unknown }) => {
    if (value === '') {
      return null;
    }
    return value;
  });
}
