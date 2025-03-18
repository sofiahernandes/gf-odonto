import { cn } from "@/lib/utils";
import { libreCaslon } from "@/app/fonts";

interface SectionTitleProps {
    title: string;
    subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
    return (
        <div className="text-center my-10">
            <h1 className={cn(`justify-center text-3xl m-0 py-1`, libreCaslon.className)}>{title}</h1>
            <p className="text-lg font-normal">{subtitle}</p>
        </div>
    )
}

export default SectionTitle;