# -*- coding: utf-8 -*-
"""
Created on Fri Jan 29 17:52:46 2021

@author: acer
"""
 
"""import socket 
import threading 
import json

HOST = '' 
PORT = 65432 
 
def main(): 
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
    s.bind((HOST, PORT)) 
    s.listen(1) 
    conn, addr = s.accept() 
    Session(conn).start(); 

class Session(threading.Thread): 
  def _init_(self, conn): 
    threading.Thread._init_(self) 
    self.conn = conn 
 
  def run(self): 
    line = self.conn.recv(256) 
    data = json.loads(line)
    print(data["hello"])
    self.conn.close() 
 
if __name__ == '__main__': 
  main()"""
import socket 
import threading 
import json
HOST = 'localhost' 
PORT = 65432 
 
def main(): 
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
    s.bind((HOST, PORT)) 
    s.listen(1) 
    
    i=10
    while(i>0):
        conn, addr = s.accept() 
        line = conn.recv(256) 
       # data = json.loads(line)
        #i=i-1
        print(line)
        if b'stop' in line:
            i=0
             
        #print(data["hello"])
    conn.close()
    print("All data received and connection closed")
         
    

"""class Session(threading.Thread): 
  def __init__(self, conn): 
    threading.Thread.__init__(self) 
    self.conn = conn 
 
  def run(self):
    line = self.conn.recv(256) 
    data = json.loads(line)
    print(data["hello"])
    self.conn.close() """
 
if __name__ == '__main__': 
  main() 