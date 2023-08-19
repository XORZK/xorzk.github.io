---
title: Huffman Coding
date: 08-17-2023
author: Henry Wang
tags: cs,algorithms,compression
---

This year, I fast tracked G12 AP CS in my second semester, and it was my first introduction to more complex data structures such as Binary Trees and Hash Maps. To efficiently demonstrate our knowledge, we were tasked to build a program which implemented Huffman Coding, a lossless data compression technique, from scratch. 

In this post, I hope to talk briefly about the fundamentals behind Huffman Coding, and how to implement them pragmatically.

## What Exactly is Huffman Coding?
As mentioned above, Huffman Coding is a relatively well-known lossless data compression technique. Lossless data compression, as opposed to lossy data compression, is a type of data compression is which none of the original data is lost. Huffman Coding utilizes the Binary Tree structure, so it may be beneficial to be familiar with Binary Trees as a prerequisite.

The main idea behind performing lossless compression is to take a large input stream of data, and to re-express this input stream in a new format in an attempt to drastically shrink the amount of information required to represent the data. Consequently, the file size should also be reduced. 

Let's first define the code of a character within an input file as the compressed representation of that character. Within Huffman Coding, each character's code is a sequence of binary characters.

Sometimes, compression algorithms will represent each character within the input file using the same code lengths. Huffman Coding takes a slightly different approach to assigning codes. Instead of using a fixed amount of bits in each code, Huffman Coding assigns the length of code in correspondence to the frequency of the character within the original input file. Thus, the code representing the least prevalent character in the input file will use more bits than the code representing the most prevalent character. This is done to minimize the amonut of bits required to represent the input file.

Furthermore, to implement Huffman Coding, it's required that we build a Huffman Tree. A Huffman Tree is a binary tree whose leaves represent characters. Each characters assigned code represents the navigational path to go from the root to reach that specific characters leaf node. For example, if a characters code is `110`, then to reach the leaf node containing that character, from the root, we need to go: right, right, left. This idea may seem confusing at the moment, but it's importance will be explained later.

### Compression using Huffman Coding

The very first step in implementing a Huffman Code is to build a frequency table, containing the frequencies of each character in the input file. 

**For Example:** If the string we want to compress is "AAABCDDEFGGGGGGG", the frequency table could look like:

| Character | Frequency | Relative Frequency | 
| --------- | --------- | ------------------ |
| A | 3 | $ 0.1875 $|
| B | 1 | $ 0.0625 $ |  
| C | 1 | $ 0.0625 $ |  
| D | 2 | $ 0.125 $ |  
| E | 1 | $ 0.0625 $ | 
| F | 1 | $ 0.0625 $ |  
| G | 7 | $ 0.4375 $ |  

Next, to initialize the Huffman Tree, we must enqueue all characters as individual binary trees into a priority queue (heap), with their frequencies as weights. 

Generating the Huffman Tree is a relatively simple process:
1. Enqueue all characters $C_i$ into the priority queue with weight $W_i$. These characters should be inserted into the priority queue as a binary tree with only a root containing the value $C_i$.
2. Next, while there are two or more elements in the priority queue, deque the two binary trees with the lowest weights in the priority queue. Call these two trees $T_1$ and $T_2$, with respective weights $W_1$ and $W_2$.
3. Create a new binary tree $T_{1,2}$ with the property that the left branch of the tree `T.root.left` is the $T_1$ tree and the right branch of the tree `T.root.right` is the $T_2$ tree. Furthermore, this new tree $T_{1,2}$ has weight $W_{1,2} = W_1 + W_2$.
4. Reinsert the new tree $T_{1,2}$ into the priority queue.
5. Continue until there is only one element in the priority queue, which will be the Huffman Tree used for compression.
6. The final weight of the Huffman Tree should equate to the amount of characters in the file to be compressed.
7. Finally, we must assign codes to each of the characters. This can be implemented as a recursive process:
    - Start with the root node.
    - If the node is not a leaf node, label the edge to it's left child as `0` and the edge to it's right child as `1`.
    - Repeat this process for both the right and left children.
    - The final code for each leaf node within the Huffman Tree is the concatenation of the symbols on the edges visited in to get to the node.

Here is the following Huffman Tree creation process for the string ""AAABCDDEFGGGGGGG:

![Huffman Tree](/huffman/huffman-tree.png)

Finally, since the code sequence for each character is a string of binary characters, we just need to replace each character in the input file with it's corresponding code, and write that concatenated sequence of binary characters out to the output file.

For example, we have determined earlier that for the following string "AAABCDDEFGGGGGGG", the corresponding codes for each character are:

| Character | Code |
| --------- | --------- | 
| A | `111` |
| B | `1010` |
| C | `1011` |
| D | `100` |
| E | `1100` |
| F | `1101` |
| G | `0` |

Thus, the binary sequence for the string "AAABCDDEFGGGGGGG" is: `11111111110101011100100110011010000000`, which is only `38` bits compared to the amount of bits required to represent 16 characters: `16 * 8 = 128` bits.

Furthermore, an essential component in decompressing this data is the Huffman Tree itself. Thus, you must write the contents of the Huffman Tree as a header in the compressed file, in which ever order specified (post-order traversal, pre-order traversal, etc).
