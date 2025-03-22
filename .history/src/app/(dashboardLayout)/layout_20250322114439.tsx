

const CommonLayout =async ({children}:{children:React.ReactNode}) => {
    const session = await getServerSession(authOptions)
    return (
        <body>
       <Navbar session={session} />
         
           <main className='min-h-screen'> {children}</main>
           <Footer/>
        </body>
    );
};

export default CommonLayout;