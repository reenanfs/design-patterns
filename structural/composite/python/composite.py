from typing import List
from component import FileSystemComponent


class Directory(FileSystemComponent):
    def __init__(self, name: str):
        self.name = name
        self.children: List[FileSystemComponent] = []

    def add(self, component: FileSystemComponent) -> None:
        self.children.append(component)

    def remove(self, component: FileSystemComponent) -> None:
        self.children = [child for child in self.children if child != component]

    def get_name(self) -> str:
        return self.name

    def get_size(self) -> int:
        return sum(child.get_size() for child in self.children)

    def print(self) -> None:
        print(f"Directory: {self.name} [Size: {self.get_size()}]")
        for child in self.children:
            if isinstance(child, Directory):
                child.print()
            else:
                print(f"  File: {child.get_name()} [Size: {child.get_size()}]")