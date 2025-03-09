import tkinter as tk
from tkinter import messagebox, filedialog
import emoji
import os

# Directory for storing news headlines
NEWS_DIR = "D:\devil_code\Destination-by-React\public"
NEWS_FILE = os.path.join(NEWS_DIR, "news.txt")

# Ensure the directory exists
os.makedirs(NEWS_DIR, exist_ok=True)

def load_news():
    """Load news from the text file."""
    try:
        with open(NEWS_FILE, "r", encoding="utf-8") as file:
            news_list.delete("1.0", tk.END)
            news_list.insert(tk.END, file.read())
    except FileNotFoundError:
        messagebox.showerror("Error", f"{NEWS_FILE} not found! A new file will be created.")

def save_news():
    """Save news to the text file."""
    text_content = news_list.get("1.0", tk.END).strip()
    with open(NEWS_FILE, "w", encoding="utf-8") as file:
        file.write(text_content)
    messagebox.showinfo("Success", "News updated successfully!")

def add_emoji(selected_emoji):
    """Insert the selected emoji into the text area."""
    news_list.insert(tk.INSERT, emoji.emojize(selected_emoji))

# Emoji options
emoji_dict = {
    "🚀 Rocket": "🚀",
    "🎓 Graduation": "🎓",
    "📢 Announcement": "📢",
    "🔥 Fire": "🔥",
    "💡 Idea": "💡",
    "🏆 Trophy": "🏆",
    "⚡ Lightning": "⚡",
}

# GUI Setup
root = tk.Tk()
root.title("News Editor")
root.geometry("500x500")
root.configure(bg="#FF6600")

# Title Label
tk.Label(root, text="News Editor", font=("Arial", 16, "bold"), bg="#FF6600", fg="white").pack(pady=10)

# News Text Area
news_list = tk.Text(root, height=10, width=50, font=("Arial", 12))
news_list.pack(pady=10)

# Load Button
tk.Button(root, text="Load News", command=load_news, bg="white", fg="black", font=("Arial", 12)).pack()

# Emoji Selection
emoji_frame = tk.Frame(root, bg="#FF6600")
emoji_frame.pack(pady=5)

tk.Label(emoji_frame, text="Add Emoji:", font=("Arial", 12, "bold"), bg="#FF6600", fg="white").pack(side=tk.LEFT, padx=5)

emoji_var = tk.StringVar(root)
emoji_var.set("🚀 Rocket")  # Default emoji

emoji_menu = tk.OptionMenu(emoji_frame, emoji_var, *emoji_dict.keys())
emoji_menu.pack(side=tk.LEFT)

tk.Button(emoji_frame, text="Insert", command=lambda: add_emoji(emoji_dict[emoji_var.get()]), bg="white", fg="black", font=("Arial", 10)).pack(side=tk.LEFT, padx=5)

# Save Button
tk.Button(root, text="Save News", command=save_news, bg="white", fg="black", font=("Arial", 12)).pack(pady=10)

# Run the GUI
root.mainloop()
