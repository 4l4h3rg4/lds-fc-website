
import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Upload, X, Loader2 } from 'lucide-react';

interface ImageUploadProps {
    onUpload: (url: string) => void;
    currentImage?: string;
    folder?: string;
}

export default function ImageUpload({ onUpload, currentImage, folder = 'uploads' }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState<string | null>(currentImage || null);
    const [error, setError] = useState<string | null>(null);

    const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);
            setError(null);

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${folder}/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('images')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data } = supabase.storage.from('images').getPublicUrl(filePath);

            setPreview(data.publicUrl);
            onUpload(data.publicUrl);

        } catch (error: any) {
            setError(error.message);
        } finally {
            setUploading(false);
        }
    };

    const removeImage = () => {
        setPreview(null);
        onUpload('');
    };

    return (
        <div className="w-full">
            {preview ? (
                <div className="relative group w-full h-48 bg-[#111] border border-white/20 rounded-sm overflow-hidden flex items-center justify-center">
                    <img
                        src={preview}
                        alt="Uploaded preview"
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={(e) => { e.preventDefault(); removeImage(); }}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <X size={16} />
                    </button>
                </div>
            ) : (
                <div className="relative border-2 border-dashed border-white/20 bg-[#111] hover:bg-[#1a1a1a] transition-colors rounded-sm h-48 flex flex-col items-center justify-center p-6 cursor-pointer">
                    <input
                        type="file"
                        id="single"
                        accept="image/*"
                        onChange={uploadImage}
                        disabled={uploading}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                    />
                    {uploading ? (
                        <div className="flex flex-col items-center text-neutral-400">
                            <Loader2 className="animate-spin mb-2 w-8 h-8 text-[var(--color-neon-cyan)]" />
                            <span className="text-xs font-mono uppercase tracking-widest">Subiendo...</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-neutral-400">
                            <Upload className="mb-2 w-8 h-8" />
                            <span className="text-xs font-mono uppercase tracking-widest text-center">Click o Arrastrar Imagen</span>
                        </div>
                    )}
                </div>
            )}
            {error && <p className="text-red-500 text-xs mt-2 font-mono">{error}</p>}
        </div>
    );
}
