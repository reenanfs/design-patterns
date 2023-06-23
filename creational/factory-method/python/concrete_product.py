from product import Logger


class ConsoleLogger(Logger):
    def log(self, message):
        print(f"[Console Logger] {message}")


class FileLogger(Logger):
    def log(self, message):
        with open("log.txt", "a") as file:
            file.write(f"[File Logger] {message}\n")
