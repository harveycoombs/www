export default function Footer() {
    return (
        <footer className="p-3">
            <div className="w-1000 mx-auto font-semibold text-slate-400/75 text-sm text-center max-[1050px]:w-full">
            {new Date().getFullYear()} &middot; Harvey Coombs
            </div>
        </footer>
    );
}