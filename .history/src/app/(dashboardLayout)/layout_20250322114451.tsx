

const CommonLayout =async ({children}:{children:React.ReactNode}) => {
    
    return (
        <body>
       <Navbar  />
         
           <main className='min-h-screen'> {children}</main>
         
        </body>
    );
};

export default CommonLayout;