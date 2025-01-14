export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
            <div className="flex bg-black bg-opacity-20 w-40 h-40 rounded-3xl items-center justify-center">
                <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
