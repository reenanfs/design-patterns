
from composite import Directory
from leaf import FileComponent


file1 = FileComponent('file1.txt', 10)
file2 = FileComponent('file2.txt', 20)
file3 = FileComponent('file3.txt', 30)

directory1 = Directory('directory1')
directory2 = Directory('directory2')

directory1.add(file1)
directory1.add(file2)
directory2.add(file3)
directory2.add(directory1)

directory2.print()