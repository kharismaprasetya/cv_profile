export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center gap-2 py-4 border-t border-gray-800">
      <div>
        <p>
          Copyright &copy; 2026 designed by{" "}
          <span className="font-bold text-brand">Kharisma</span>
        </p>
      </div>
      <div className="flex gap-1 p-2 rounded-4xl bg-gray-800">
        <div>
          Facebook
        </div>
        <div>
          Instagram
        </div>
      </div>
    </footer>
  );
}
