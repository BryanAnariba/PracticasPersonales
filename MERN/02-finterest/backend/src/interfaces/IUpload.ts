export interface IUpload {
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

/*
    title
    imageDescription
    fileName
    path
    originalName
    mimeType
    size 
*/