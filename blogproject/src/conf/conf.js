const conf = {
    Appwrite_URL : String(import.meta.env.VITE_APPWRITE_URL),
    Appwrite_Project_Id : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    Appwrite_Project_Id : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    Appwrite_Collection_Id : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    Appwrite_Bucket_Id : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf;