import { notFound } from "next/navigation";
import { getDoctorBySlug, doctorSlugs } from "@/lib/doctors";
import DoctorProfilePage from "@/components/lumiere/DoctorProfilePage";

interface DoctorPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return doctorSlugs.map((slug) => ({ slug }));
}

export default async function DoctorPage({ params }: DoctorPageProps) {
    const { slug } = await params;
    const doctor = getDoctorBySlug(slug);

    if (!doctor) {
        notFound();
    }

    return <DoctorProfilePage doctor={doctor} />;
}
