import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CodeEditor() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const userRole = localStorage.getItem("userRole");

    const {id , framework} = useParams();

    console.log("ID:", id);
    console.log("Framework:", framework);

    // const userId = localStorage.getItem("userId");


    // const dockerPort = localStorage.getItem("dockerPort");
    // var outputPort = localStorage.getItem("outputPort");

    // const dockerVuePort = Number(localStorage.getItem("dockerPort")) + 1;

    // if (framework === "vue"){
    //    outputPort = Number(localStorage.getItem("outputPort")) + 1;
    // }

    // console.log(dockerPort,dockerVuePort, outputPort, framework);

    const navigate = useNavigate();

  // console.log(userRole);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");

    console.log("User role:", userRole);

    if (["4", "3", "5"].includes(userRole)) {
      setIsAuthorized(true); // Let them through
    } else {
      navigate("/"); // Kick 'em out
    }
  }, [navigate]);

    return (
        <div className="relative h-[625px]"> {/* 👈 height added */}

        {
          id === "8" ? (
            <div className="relative h-[625px]">
              {framework === "react" ? (
                  <iframe
                  src='http://192.168.253.187:8080/?folder=/home/coder/project'
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="CodeSandbox IDE"
                  />
              ) : framework === "vue" ? (
                  <iframe
                  src='http://192.168.253.187:8081/?folder=/home/coder/project'
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="CodeSandbox IDE"
                  />
              ) : (
                  <p style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
                  🚫 Unauthorized access. You do not have permission to view this editor.
                  </p>
              )}

{
                framework === "react" ? (
                  <div className="absolute bottom-6 right-6 z-50">
                    <Link to='http://192.168.253.187:5173' target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg
                                        hover:bg-blue-700 hover:shadow-xl
                                        transition duration-300 ease-in-out
                                        focus:outline-none focus:ring-4 focus:ring-blue-300
                                        ring-1 ring-blue-500/50 backdrop-blur-sm">
                                Output
                        </button>
                    </Link>
                  </div>
                ) : framework === "vue" ? (
                  <div className="absolute bottom-6 right-6 z-50">
                    <Link to='http://192.168.253.187:5174' target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg
                                        hover:bg-blue-700 hover:shadow-xl
                                        transition duration-300 ease-in-out
                                        focus:outline-none focus:ring-4 focus:ring-blue-300
                                        ring-1 ring-blue-500/50 backdrop-blur-sm">
                                Output
                        </button>
                    </Link>
                  </div>
                ) : (
                  <p style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
                  🚫 Unauthorized access. You do not have permission to view this output.
                  </p>
                )
              }
            </div>
          ) : id ==="7" ?(
            <div className="relative h-[625px]">
              {framework === "react" ? (
                  <iframe
                  src='http://192.168.253.187:8082/?folder=/home/coder/project'
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="CodeSandbox IDE"
                  />
              ) : framework === "vue" ? (
                  <iframe
                  src='http://192.168.253.187:8083/?folder=/home/coder/project'
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="CodeSandbox IDE"
                  />
              ) : (
                  <p style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
                  🚫 Unauthorized access. You do not have permission to view this editor.
                  </p>
              )}

              {
                framework === "react" ? (
                  <div className="absolute bottom-6 right-6 z-50">
                    <Link to='http://192.168.253.187:5175' target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg
                                        hover:bg-blue-700 hover:shadow-xl
                                        transition duration-300 ease-in-out
                                        focus:outline-none focus:ring-4 focus:ring-blue-300
                                        ring-1 ring-blue-500/50 backdrop-blur-sm">
                                Output
                        </button>
                    </Link>
                  </div>
                ) : framework === "vue" ? (
                  <div className="absolute bottom-6 right-6 z-50">
                    <Link to='http://192.168.253.187:5176' target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg
                                        hover:bg-blue-700 hover:shadow-xl
                                        transition duration-300 ease-in-out
                                        focus:outline-none focus:ring-4 focus:ring-blue-300
                                        ring-1 ring-blue-500/50 backdrop-blur-sm">
                                Output
                        </button>
                    </Link>
                  </div>
                ) : (
                  <p style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
                  🚫 Unauthorized access. You do not have permission to view this output.
                  </p>
                )
              }
              
            </div>
          ) :(
            <div className="relative h-[625px]">
              {framework === "react" ? (
                  <iframe
                  src='http://192.168.253.187:8084/?folder=/home/coder/project'
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="CodeSandbox IDE"
                  />
              ) : framework === "vue" ? (
                  <iframe
                  src='http://192.168.253.187:8085/?folder=/home/coder/project'
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="CodeSandbox IDE"
                  />
              ) : (
                  <p style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
                  🚫 Unauthorized access. You do not have permission to view this editor.
                  </p>
              )}

{
                framework === "react" ? (
                  <div className="absolute bottom-6 right-6 z-50">
                    <Link to='http://192.168.253.187:5177' target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg
                                        hover:bg-blue-700 hover:shadow-xl
                                        transition duration-300 ease-in-out
                                        focus:outline-none focus:ring-4 focus:ring-blue-300
                                        ring-1 ring-blue-500/50 backdrop-blur-sm">
                                Output
                        </button>
                    </Link>
                  </div>
                ) : framework === "vue" ? (
                  <div className="absolute bottom-6 right-6 z-50">
                    <Link to='http://192.168.253.187:5178' target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg
                                        hover:bg-blue-700 hover:shadow-xl
                                        transition duration-300 ease-in-out
                                        focus:outline-none focus:ring-4 focus:ring-blue-300
                                        ring-1 ring-blue-500/50 backdrop-blur-sm">
                                Output
                        </button>
                    </Link>
                  </div>
                ) : (
                  <p style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
                  🚫 Unauthorized access. You do not have permission to view this output.
                  </p>
                )
              }
            </div>
          )
        }
        
        </div>

    );
}
