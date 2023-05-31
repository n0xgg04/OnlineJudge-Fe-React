import {BsCodeSlash} from "react-icons/bs";


export default function ScrollBtn(){
    return(
        <a className="scroll-btn"
                 style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#4769c1",
                backdropFilter: "blur(10px)",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                zIndex: "1000",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                transition : "all 0.3s ease-in-out",
                }}

                href={"#editor"}>
            <BsCodeSlash style={{
                color: "white",
                fontSize: "0.9rem",
            }}></BsCodeSlash>
        </a>
    )
}