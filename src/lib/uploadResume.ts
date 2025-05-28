// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { doc, setDoc } from 'firebase/firestore';
// import { db, storage } from './firebase';
// import { v4 as uuidv4 } from 'uuid';

// export async function uploadResume(pdfBlob: Blob, latex: string) {
//   const id = uuidv4(); // gen unique ID

//   // define file paths in Firebase Storage
//   const pdfRef = ref(storage, `resumes/${id}.pdf`);
//   const texRef = ref(storage, `resumes/${id}.tex`);

//   // upload PDF and .tex
//   await uploadBytes(pdfRef, pdfBlob);
//   await uploadBytes(texRef, new Blob([latex], { type: 'text/plain' }));

//   // get public URLs
//   const pdfUrl = await getDownloadURL(pdfRef);
//   const latexUrl = await getDownloadURL(texRef); // Optional if you want

//   // save metadata to Firestore
//   await setDoc(doc(db, 'resumes', id), {
//     pdfUrl,
//     latex, // store LaTeX content directly for Overleaf
//     createdAt: new Date().toISOString(),
//   });

//   return id;
// }
