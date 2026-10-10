import { BentoCell } from "@/components/ui/bento-cell";
import { currentRole, currentRoleStat, formatPeriod } from "@/lib/data/experience";

export function CurrentRoleCell() {
  return (
    <BentoCell
      tone="brand"
      className="xl:col-span-5"
      coreClassName="flex flex-col justify-between gap-10 p-6 text-on-brand sm:p-8"
    >
      <div>
        <p className="text-small text-on-brand/85">Currently</p>
        <h3 className="mt-1 font-display text-h3 font-semibold">{currentRole.title}</h3>
        <p className="mt-2 text-small text-on-brand/85">{currentRole.org}</p>
        <p className="text-small text-on-brand/85">{formatPeriod(currentRole.period)}</p>
      </div>
      <div>
        <p className="font-display text-display leading-none font-semibold">{currentRoleStat.value}</p>
        <p className="mt-3 max-w-[30ch] text-small text-on-brand/85">{currentRoleStat.label}</p>
      </div>
    </BentoCell>
  );
}
