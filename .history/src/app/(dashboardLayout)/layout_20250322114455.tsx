

const CommonLayout =async ({children}:{children:React.ReactNode}) => {
    
    return (
        <body>
       <Side  />
         
           <main className='min-h-screen'> {children}</main>
         
        </body>
    );
};

export default CommonLayout;