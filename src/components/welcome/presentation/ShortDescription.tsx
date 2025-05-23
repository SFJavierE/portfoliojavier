import { memo } from 'react';
import TRANSLATE from "../../../utils/translates/welcome/translate.json";

const ShortDescription = memo(() => {
  return (
    <div className="max-w-[90vw] md:max-w-[65ch] space-y-2 md:space-y-3">
      <p className="text-md leading-relaxed text-indigo-100 line-clamp-3 md:line-clamp-none">
        {TRANSLATE.ES.DESCRIPTION}
      </p>
    </div>
  );
});

ShortDescription.displayName = 'ShortDescription';
export default ShortDescription;