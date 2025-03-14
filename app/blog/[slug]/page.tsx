export default function BlogPostPage({params}:any){
      return <main>
        <h1>welcome to blog post page</h1>
        <p>{params.slug}</p>
      </main>
}