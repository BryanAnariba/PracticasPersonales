export interface IImage {
    imageId?: number;
    userId?: number;
    title: string;
    imageDescription: string;
    fileName: string;
    path: string;
    originalName: string;
    mimeType: string;
    size: number;
    createdAt?: Date;
}

export interface IImageState {
    images: IImage[]
}
