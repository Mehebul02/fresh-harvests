import Sidebar from "@/components/shared/Sidebar";


const CommonLayout =async ({children}:{children:React.ReactNode}) => {
    
    return (
        <body>
       <Sidebar  />
         
           <main className='min-h-screen'> {children}</main>
         
        </body>
    );
};

export default CommonLayout;