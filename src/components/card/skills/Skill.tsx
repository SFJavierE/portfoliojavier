import { memo } from 'react';
import { Skills } from '../../../utils/interfaces/Interfaces';
import type { ReactElement } from 'react';

const Skill = memo(({ skill }: { skill: Skills }): ReactElement => (
  <span className="text-zinc-100 text-xs md:text-sm p-1 md:p-2 rounded
                  mr-1 md:mr-2 shadow-sm md:shadow-inner shadow-indigo-900/50
                  font-semibold md:font-bold bg-indigo-900/20 hover:bg-indigo-900/30
                  transition-all duration-200 whitespace-nowrap cursor-pointer"
        title={skill}
  >
    {skill}
  </span>
));

Skill.displayName = 'Skill';
export default Skill;