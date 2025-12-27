import { GalleryCards } from './GalleryCards';

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center justify-between px-4 py-8">
      <div className="w-full max-w-5xl space-y-8">
        <h1 className="text-3xl font-bold text-slate-900">Gallery</h1>
        <GalleryCards />
      </div>
    </div>
  );
}
