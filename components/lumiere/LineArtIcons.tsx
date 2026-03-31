type IconProps = {
    className?: string;
};

function BaseIcon({ className, children }: IconProps & { children: React.ReactNode }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

export function LeafLaserIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M5 15c4.6 0 8.7-2.3 11-6 1.3 3.2-.5 7-3.9 8.5-2.2 1-4.8.6-7.1-.9Z" />
            <path d="M5 18h14" />
            <path d="M17 4v3" />
            <path d="M19.8 5.2 17.6 6.9" />
            <path d="M14.2 5.2 16.4 6.9" />
        </BaseIcon>
    );
}

export function BodyContourIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M7 4c2.6 2.3 2.8 4.8 1.2 7.6-1.4 2.4-1.3 5.2 1.7 8.4" />
            <path d="M17 4c-2.6 2.3-2.8 4.8-1.2 7.6 1.4 2.4 1.3 5.2-1.7 8.4" />
            <path d="M10.5 8.5c.9.7 2.1.7 3 0" />
        </BaseIcon>
    );
}

export function RippleIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M5 9c2.2 1.4 4.8 1.4 7 0 2.2-1.4 4.8-1.4 7 0" />
            <path d="M5 13c2.2 1.4 4.8 1.4 7 0 2.2-1.4 4.8-1.4 7 0" />
            <path d="M7 17c1.6.9 3.4.9 5 0 1.6-.9 3.4-.9 5 0" />
        </BaseIcon>
    );
}

export function HandCareIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M6 15c2.4-2.8 4.7-4.2 7.1-4.2 1.8 0 2.9 1.2 2.9 2.8 0 2.9-2.8 5.4-6.8 5.4H6.6" />
            <path d="M10 8.5c.6-1.5 1.8-2.5 3.2-2.5 1.4 0 2.2.9 2.2 2.1" />
            <path d="M4.5 17.5h4.8" />
        </BaseIcon>
    );
}

export function VortexIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M12 4c3.8 0 6.5 2.2 6.5 5.1S16.2 14 12.5 14c-2.7 0-4.5-1.4-4.5-3.2S9.6 8 12 8c1.6 0 2.7.8 2.7 1.9S14 12 12.9 12" />
            <path d="M12 14v5" />
            <path d="M10.5 17h3" />
        </BaseIcon>
    );
}

export function NeedleGlowIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M5 18 15.5 7.5" />
            <path d="M14.2 6.2 17.8 9.8" />
            <path d="M12.8 14.2 9.8 17.2" />
            <path d="M18.5 4.5v2" />
            <path d="M19.5 5.5h-2" />
        </BaseIcon>
    );
}

export function UltrasoundWaveIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M4 8c2.2 2 4.8 2 7 0s4.8-2 7 0" />
            <path d="M4 12c2.2 2 4.8 2 7 0s4.8-2 7 0" />
            <path d="M4 16c2.2 2 4.8 2 7 0s4.8-2 7 0" />
        </BaseIcon>
    );
}

export function MicroGridIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <circle cx="8" cy="8" r="0.7" />
            <circle cx="12" cy="8" r="0.7" />
            <circle cx="16" cy="8" r="0.7" />
            <circle cx="8" cy="12" r="0.7" />
            <circle cx="12" cy="12" r="0.7" />
            <circle cx="16" cy="12" r="0.7" />
            <circle cx="8" cy="16" r="0.7" />
            <circle cx="12" cy="16" r="0.7" />
            <circle cx="16" cy="16" r="0.7" />
            <path d="M12 3v2" />
            <path d="M21 12h-2" />
            <path d="M12 21v-2" />
            <path d="M3 12h2" />
        </BaseIcon>
    );
}

export function SunBeamIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <circle cx="12" cy="10" r="3.2" />
            <path d="M12 3v2" />
            <path d="M6.8 5.2 8 7" />
            <path d="M17.2 5.2 16 7" />
            <path d="M6 10H4" />
            <path d="M20 10h-2" />
            <path d="M12 14v6" />
            <path d="M10.5 18.5h3" />
        </BaseIcon>
    );
}

export function SnowContourIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M12 5v14" />
            <path d="M7 8.2 17 15.8" />
            <path d="M17 8.2 7 15.8" />
            <path d="M5.5 19c1.9-1.4 4.2-1.9 6.5-1.9s4.6.5 6.5 1.9" />
        </BaseIcon>
    );
}

export function ArchWindowIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M6 20V9a6 6 0 0 1 12 0v11" />
            <path d="M12 3v17" />
            <path d="M6 12h12" />
            <path d="M3.5 18.5c1.6-1.1 3.2-1.6 4.8-1.6" />
            <path d="M20.5 18.5c-1.6-1.1-3.2-1.6-4.8-1.6" />
        </BaseIcon>
    );
}

export function SterileLeafIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M4 15h8" />
            <path d="M4 12h6" />
            <path d="M4 18h7" />
            <path d="M15 18c2.8 0 5-2.2 5-5-2.8 0-5 2.2-5 5Z" />
            <path d="M15 18c0-2.8-2.2-5-5-5 0 2.8 2.2 5 5 5Z" />
        </BaseIcon>
    );
}

export function SilkFlowIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M3 9c3-2.8 6-2.8 9 0s6 2.8 9 0" />
            <path d="M3 13c3-2.8 6-2.8 9 0s6 2.8 9 0" />
            <path d="M3 17c3-2.8 6-2.8 9 0s6 2.8 9 0" />
        </BaseIcon>
    );
}

export function PhoneLineIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M7.5 4.5c.5-.5 1.3-.6 1.9-.2l2 1.2c.6.3.9 1 .7 1.6l-.6 2c-.2.6 0 1.2.5 1.7l1.4 1.4c.5.5 1.1.7 1.7.5l2-.6c.7-.2 1.3.1 1.6.7l1.2 2c.3.6.2 1.4-.2 1.9l-1.2 1.2c-.8.8-2 1.1-3.1.8-2.8-.8-5.4-2.5-7.5-4.7-2.2-2.1-3.9-4.7-4.7-7.5-.3-1.1 0-2.3.8-3.1l1.5-1.1Z" />
        </BaseIcon>
    );
}

export function EnvelopeQuillIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <rect x="3" y="6" width="18" height="12" rx="2.2" />
            <path d="M4.5 7.5 12 13l7.5-5.5" />
            <path d="M16.8 16.5 19.5 19" />
            <path d="M15.5 19.5 18 17" />
        </BaseIcon>
    );
}

export function PinLineIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="M12 21s6-5.7 6-10a6 6 0 1 0-12 0c0 4.3 6 10 6 10Z" />
            <circle cx="12" cy="11" r="2.1" />
        </BaseIcon>
    );
}

export function ClockLineIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8.2v4.2l2.8 1.8" />
        </BaseIcon>
    );
}

export function CheckSealIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <circle cx="12" cy="12" r="8" />
            <path d="m8.5 12.2 2.2 2.2 4.8-4.8" />
        </BaseIcon>
    );
}

export function ChevronLineIcon({ className }: IconProps) {
    return (
        <BaseIcon className={className}>
            <path d="m6 9 6 6 6-6" />
        </BaseIcon>
    );
}

export function WhatsAppLineIcon({ className }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.174-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.264.489 1.697.626.713.227 1.363.195 1.876.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.448 4.436-9.884 9.888-9.884 2.64.001 5.12 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.99c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.82 11.82 0 0 0 12.06 0C5.495 0 .16 5.336.157 11.9a11.8 11.8 0 0 0 1.607 5.929L0 24l6.278-1.647a11.94 11.94 0 0 0 5.767 1.469h.005c6.562 0 11.897-5.335 11.9-11.899a11.82 11.82 0 0 0-3.48-8.434" />
        </svg>
    );
}
