import Image from "next/image";
import Link from "next/link";

export default function AdminNav() {
    return (
        <nav className="bg bg-red-500">
            <ul className="">
                <li className="">
                    <Link className="" href="/admin">Home</Link>
                </li>
            </ul>

            <div>
                <Link href="/admin/profile">
                    <Image className="rounded-full" width={48} height={48} src="/sample_user.jpg" alt="profile image"/>
                </Link>
            </div>
        </nav>
    )
    
}