import { useEffect, useState,useRef  } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CodeEditor() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const userRole = sessionStorage.getItem("userRole");

    const {id , framework} = useParams();

    console.log("ID:", id);
    console.log("Framework:", framework);

    // const userId = sessionStorage.getItem("userId");


    // const dockerPort = sessionStorage.getItem("dockerPort");
    // var outputPort = sessionStorage.getItem("outputPort");

    // const dockerVuePort = Number(sessionStorage.getItem("dockerPort")) + 1;

    // if (framework === "vue"){
    //    outputPort = Number(sessionStorage.getItem("outputPort")) + 1;
    // }

    // console.log(dockerPort,dockerVuePort, outputPort, framework);

    const navigate = useNavigate();
      const iframeRef = useRef(null);

  // console.log(userRole);
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const injectScript = () => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          const script = iframeDoc.createElement('script');
          script.textContent = `
            document.addEventListener('paste', (e) => {
              e.preventDefault();
              alert('Pasting is disabled for this assessment.');
            });
            document.addEventListener('copy', (e) => {
              e.preventDefault();
              alert('Copying is disabled for this assessment.');
            });
          `;
          iframeDoc.head.appendChild(script);
        } catch (e) {
          console.error('Failed to inject script into iframe:', e);
        }
      };
      iframe.addEventListener('load', injectScript);
      return () => iframe.removeEventListener('load', injectScript);
    }
  }, []);

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");

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
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8080/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8081/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5173' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5174' target="_blank" rel="noopener noreferrer">
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
          <div className="relative h-[650px]">
            {framework === "react" ? (
                <iframe
                src='http://192.168.253.134:8082/?folder=/home/coder/project'
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="CodeSandbox IDE"
                />
            ) : framework === "vue" ? (
                <iframe
                src='http://192.168.253.134:8083/?folder=/home/coder/project'
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
                  <Link to='http://192.168.253.134:5175' target="_blank" rel="noopener noreferrer">
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
                  <Link to='http://192.168.253.134:5176' target="_blank" rel="noopener noreferrer">
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
          <div className="relative h-[650px]">
            {framework === "react" ? (
                <iframe
                src='http://192.168.253.134:8084/?folder=/home/coder/project'
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="CodeSandbox IDE"
                />
            ) : framework === "vue" ? (
                <iframe
                src='http://192.168.253.134:8085/?folder=/home/coder/project'
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
                  <Link to='http://192.168.253.134:5177' target="_blank" rel="noopener noreferrer">
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
                  <Link to='http://192.168.253.134:5178' target="_blank" rel="noopener noreferrer">
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
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8086/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8087/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5179' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5180' target="_blank" rel="noopener noreferrer">
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
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8088/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8089/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5181' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5182' target="_blank" rel="noopener noreferrer">
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
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8090/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8091/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5183' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5184' target="_blank" rel="noopener noreferrer">
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
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8092/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8093/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5185' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5186' target="_blank" rel="noopener noreferrer">
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
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8094/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8095/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5187' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5188' target="_blank" rel="noopener noreferrer">
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
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8096/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8097/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5189' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5190' target="_blank" rel="noopener noreferrer">
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
    }else if (id === "15") {
      return (
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8098/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8099/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5191' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5192' target="_blank" rel="noopener noreferrer">
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
    }else if (id === "16") {
      return (
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8100/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8101/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5193' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5194' target="_blank" rel="noopener noreferrer">
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
    }else if (id === "17") {
      return (
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8102/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8103/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5195' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5196' target="_blank" rel="noopener noreferrer">
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
    } else if (id === "18") {
      return (
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8104/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8105/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5197' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5198' target="_blank" rel="noopener noreferrer">
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
    } else if (id === "19") {
      return (
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8106/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8107/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5199' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5200' target="_blank" rel="noopener noreferrer">
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
    } else if (id === "20") {
      return (
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8108/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8109/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5201' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5202' target="_blank" rel="noopener noreferrer">
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
    } else if (id === "21") {
      return (
        <div className="relative h-[650px]">
          {framework === "react" ? (
              <iframe
              src='http://192.168.253.134:8110/?folder=/home/coder/project'
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="CodeSandbox IDE"
              />
          ) : framework === "vue" ? (
              <iframe
              src='http://192.168.253.134:8111/?folder=/home/coder/project'
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
                <Link to='http://192.168.253.134:5203' target="_blank" rel="noopener noreferrer">
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
                <Link to='http://192.168.253.134:5204' target="_blank" rel="noopener noreferrer">
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
        <div className=""> {/* 👈 height added */}



        {
         renderContent()
        }
        
        </div>

    );
}
