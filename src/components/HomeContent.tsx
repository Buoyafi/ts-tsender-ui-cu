import AirdropForm from "@/components/AirdropForm";

export default function HomeContent() {
    return (
        <div>
            <AirdropForm isUnsafeMode={false} onModeChange={() => { }} />
        </div>
    )
}