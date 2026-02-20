// // Integer Input
// import 'dart:io';
// void main() {
//   print("Enter your age:");
//   int age = int.parse(stdin.readLineSync()!);
//   print("Your age is: $age");
// }

// // String Input
// import 'dart:io';
// void main(){
//     print("Enter your name:");
//     String name= stdin.readLineSync()!;
//     print("Your name is: $name");
// }

// // Map Example
// void main(){
//   Map<String, int> marks = {
//     "Alice": 30,
//     "Bob": 25,
//     "Charlie": 35
//   };
//   print(marks ["Alice"]);
// }

// // List Example
// void main(){
//   List<String> fruits = ["Apple", "Banana", "Cherry"];
//   print(fruits[0]);
// }

// // Set Example
// void main(){
//   Set<String> colors = {"Red", "Green", "Blue"};
//   print(colors.contains("Green"));
// }

// what is var?
// In Dart, 'var' is a keyword used to declare a variable without explicitly specifying its type.
// The type of the variable is inferred by the compiler based on the value assigned to it.
//Once a value is assigned to a 'var' variable, its type cannot be changed. For example:

// // Variable Reassignment Error
// void main(){
//   var a = "Hello, World!";
//   a=20;      // Error: A value of type 'int' can't be assigned to a variable of type 'String'.
//   print(a);
// }

// // dunamic
// void main(){
//   dynamic data = "Hello, World!";
//   print(data);
// }

// What is Final and Const?
// In Dart, 'final' and 'const' are keywords used to declare variables that cannot be reassigned after they have been initialized.
//  However, there are some differences between the two:

// 1. 'final' variables can be assigned a value only once, but their value can be determined at runtime.
//They are initialized when accessed for the first time.

// 2. 'const' variables are compile-time constants, meaning their value must be known at compile time.
//They are initialized at compile time and cannot be changed at runtime.

// // Final Example
// void main(){
//   final String name = "Alice";
//   print(name);
// }

// // Const Example
// void main(){
//   const int age = 30;
//   print(age);
// }

// // // Small Practice Program
// void main() {
//   var name = "Alice";
//   int age = 30;
//   double height = 5.6;
//   bool isTeacher = true;

//   print("Name: $name");
//   print("Age: $age");
//   print("Height: $height");
//   print("Is Teacher: $isTeacher");
// }
