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

  function renderContent() {
    if (id === "8") {
      return (
        <div className="relative h-[630px]">
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
      );
    }else if (id === "7") {
        return (
          <div className="relative h-[630px]">
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
        );
    }else if (id === "6") {
        return (
          <div className="relative h-[630px]">
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
    }else if (id === "9") {
      return (
        <div className="relative h-[630px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.187:8086/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.187:8087/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.187:5179' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.187:5180' target="_blank" rel="noopener noreferrer">
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
    }else if (id === "10") {
      return (
        <div className="relative h-[630px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.187:8088/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.187:8089/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.187:5181' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.187:5182' target="_blank" rel="noopener noreferrer">
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
    }else if (id === "11") {
      return (
        <div className="relative h-[630px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.187:8090/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.187:8091/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.187:5183' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.187:5184' target="_blank" rel="noopener noreferrer">
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
    }else if (id === "12") {
      return (
        <div className="relative h-[630px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.187:8092/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.187:8093/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.187:5185' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.187:5186' target="_blank" rel="noopener noreferrer">
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
    }else if (id === "13") {
      return (
        <div className="relative h-[630px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.187:8094/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.187:8095/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.187:5187' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.187:5188' target="_blank" rel="noopener noreferrer">
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
    }else if (id === "14") {
      return (
        <div className="relative h-[630px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.187:8096/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.187:8097/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.187:5189' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.187:5190' target="_blank" rel="noopener noreferrer">
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

    return null;
  }

    return (
        <div className="relative h-[630px]"> {/* 👈 height added */}



        {
         renderContent()
        }
        
        </div>

    );
}
