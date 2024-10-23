import { Button } from "@/components/ui/button"

const Menu = () => {
  return (
    <div className="min-h-screen">
               <header className="bg-black text-primary text-center py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Menu</h1>
          <p className="mt-2 text-xl">Our Menu</p>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center gap-4 py-40">
        <p className="font-semibold text-2xl">This page is under construction 🤖
        </p>
        <Button><a href="/">Go to home?</a></Button>
      </div>
    </div>
  )
}

export default Menu
