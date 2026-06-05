const Resume = () => {
    return (
        <>
            <section id="resume" className="py-20"> 
                <div className="container mx-auto px-5">
                <object data="resume9.pdf" type="application/pdf" width="100%" height="600px">
                    <p>Your browser does not support PDFs. <a href="resume.pdf" className="text-primary underline">Download the resume</a>.</p>
                </object>
                </div>
            </section>
        </>
    );
}

export default Resume;