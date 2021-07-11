import socket 
import threading 
import json
import mysql.connector
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="Moana2018@",
  database="aliens"
)

HOST = "10.1.17.31"
PORT = 50935
 
def main(): 
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
    s.bind((HOST, PORT)) 
    s.listen(1) 
    conn, addr = s.accept() 
    Session(conn).start(); 

class Session(threading.Thread): 
  def __init__(self, conn): 
    threading.Thread.__init__(self) 
    self.conn = conn 
 
  def run(self): 
    line = self.conn.recv(256) 
    data = json.loads(line)
    self.conn.close() 
    mycursor = mydb.cursor()
    sql = "INSERT INTO  records (sys,dia,emap,dmap,op) VALUES (%s,%s,%s,%s,%s)"
    val = (data["SYSTOLIC_PRESSURE"],  data["DIASTOLIC_PRESSURE"],data["ENCRYPTED_MAP"],data["DECRYPTED_MAP"],data["TEST_REPORT"])
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")
 
if __name__ == '__main__': 
  main() 