// interface Props {
//   formData: FormData;
// }
export default async function ImageProvider(formData: FormData) {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_LINK}/api/upload`, {
    method: "POST",
    // headers: {
    //   "content-type": "application/json;charset:UTF-8",
    // },
    body: formData,
  });
  // console.log(`Responce: `, await res.json());
  // console.log(`Respince2: `);
  // const responce = await res.json();
  // console.log(`Respince3: `);
  // return responce;
  return await res.json();
}
