export default function handler(req, res) {
    
    // res.status(200).json({ text: 'Hello' })
    const getPosts = async () => {
        try {
          let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
          
          let { data } = res
    
        } catch (error) {
          console.error(error);
        }
      };
  }
  