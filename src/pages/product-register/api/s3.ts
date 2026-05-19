export const uploadToS3 = (presignedUrl: string, file: File) =>
  fetch(presignedUrl, {
    method: 'PUT',
    body: file,
    headers: { 'Content-Type': file.type },
  });
