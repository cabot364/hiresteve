# Resume / Portfolio Site

I am going on the job hunt again and wanted something more appealing to accompany my resume. Also, it's a pain to create a tailored offering for every job that I may apply to. I decided to create a flexible Resume website that would showcase not only my ability and ingenuity, but make the process of job applications easier. After finishing the site, I decided to open source the project, as I believe others may find this as a handy way to bolster their own job searches.

I designed and developed this website with React/Vite/Tailwind CSS. The website is split into Sections which contain relevant Components. The entire App is wrapped with a DataProvider which inluces a useData hook. This allows me to manage all of the site's content inside of the data.js file. Beyond that, I built in a subdomain check, which will load different data.js files based on the subdomain. Now when I apply for a Design job, I can send the link with the design subdomain, and the site will serve my design oriented content. 

This bit of code in particular found in ./Utility/DataContext.jsx

```

// Context provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const subdomain = window.location.hostname.split('.')[0];
    let dataModulePromise;
    switch (subdomain) {
      case 'design':
        dataModulePromise = import('../design_data.js');
        break;
      case 'blockchain':
        dataModulePromise = import('../blockchain_data.js');
        break;
      default:
        dataModulePromise = import('../data.js');
    }

    dataModulePromise.then((module) => {
      setData(module.default);
    });
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

```

You can modify the switch statement to create new subdomain/data pairs. 

The data.js file is well commented and self explanatory imho.
