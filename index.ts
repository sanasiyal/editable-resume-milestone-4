const resume = document.getElementById('resume') as HTMLElement
const resumeoutput = document.getElementById('resumeoutput') as HTMLElement
const generatebutton = document.getElementById('generatebutton') as HTMLElement

if(resume && resumeoutput && generatebutton){
    resume.addEventListener('submit' ,(event)=>{
        event.preventDefault();

        const name=( document.getElementById('Name') as HTMLInputElement).value;
        const email=( document.getElementById('email') as HTMLInputElement).value;
        const number=( document.getElementById('number') as HTMLInputElement).value;
        const education =( document.getElementById('education') as HTMLTextAreaElement).value;
        const workexperience=( document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills=( document.getElementById('skills') as HTMLTextAreaElement).value;

        const resumeHTML = `
        <h1>generated resume</h1>
        <p><strong>name:</strong> ${name}</p> 
         <p><strong>email:</strong> ${email}</p>
          <p><strong>number:</strong> ${number}</p>
           <p><strong>education:</strong> ${education}</p>
            <p><strong>experience:</strong> ${workexperience}</p>
             <p><strong>skills:</strong> ${skills}</p>
        `;
        resumeoutput.innerHTML=resumeHTML
        
    });
}else{
    console.error(`form or output div not found in this page`)
}
