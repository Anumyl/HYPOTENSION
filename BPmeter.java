// import java.io.BufferedReader; 
// import java.io.BufferedWriter; 
// import java.io.InputStreamReader; 
// import java.io.IOException; 
// import java.io.OutputStreamWriter; 
import java.io.*;
import java.util.*;
import java.net.Socket; 
import org.json.simple.JSONObject;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Random;

public class BPmeter extends Thread
{
    public static final String REMOTE_HOST = "localhost"; 
    public static final int REMOTE_PORT = 65432 ;
    static ArrayList<Integer>key_hard=new ArrayList<>();
    static ArrayList<Integer> list = new ArrayList<>();
    static ArrayList<Integer> keylist = new ArrayList<>();
    static ArrayList<BigInteger> pkey=new ArrayList<>();
    static BigInteger remainder;
    static final int MAX = 10000000; 
    static int get_key=0;
    static int arr_key=0;
    static int arr_key1=3;
    static int get_keyvalues=0;
    static int b1=0;
    static int b4=0;
    static ArrayList<BigInteger> range=new ArrayList<>();
    static BigInteger pk;
    static Integer mape1;
    static long tes, tee, tds, tde, taes, tads, tade;
    static BigInteger s,d,mapee3,emap,dmap;
    
    protected static void details(String sysp,String diap)
    {
        Random ran=new Random();
        get_key=ran.nextInt(100);
        for(int i=0;i<MAX;i++)
        {
                      
            int key=ran.nextInt(100000);
            if(key>0)
            {
                key_hard.add(key);
            }       
        }
        
        int i=0;
        int  beg=1;
        int end=MAX;
        String primeNumbers = "";
        
        for (int n = beg; n <= 100000; n++)
        {
            boolean prime = true;
            for (int j = 2; j <= n / 2; j++) 
            {
                if (n % j == 0 && n != j) {
                    prime = false;
                }
            }
            if(n>5000)
            {
                if (prime) 
                {
                    list.add(n);
                }
            }
        }

        String Systolics=sysp;
        String Diastolics=diap;
        
        long totalencryptstart=System.nanoTime();
        int j1=0;
            
        tes=System.nanoTime();
        System.out.println("\n");
        System.out.println("***************************");
        System.out.println("Encryption Start Time       : "+tes);
            
        int sys=Integer.valueOf(Systolics);
        int dia=Integer.valueOf(Diastolics);

        long start_time=System.nanoTime();
                
        Encryption_Initialization();
        BigInteger Systolic=Encryption_Process(sys);
        BigInteger Diastolic=Encryption_Process(dia);
        
        s=Systolic;
        d=Diastolic;
        
        BigInteger t1=new BigInteger("2");
        BigInteger temp1=t1.multiply(Diastolic);
        BigInteger map3=Systolic.add(temp1);      
        System.out.println("ENCRYPTED MAP VALUE         : "+map3);
        mapee3=map3;
        emap=map3;
        BigInteger rangeenc = Encryption_Process(165);
        range.add(rangeenc);


        System.out.println("Encryption End Time         : "+System.nanoTime());
        System.out.println("***************************");
        tee=System.nanoTime()-tes;
        
        long completetime=System.nanoTime()-totalencryptstart;
    }
    
    static void Encryption_Initialization()
    {
        int i=0;
        int  beg=50;
        int end=100;
        String primeNumbers = "";
        
        Random r = new Random();
        if(b4>5)
        {
            b4=r.nextInt(5);
        }
        get_key=get_key+1;
        b4=b4+1;
        get_keyvalues=get_key+1;
               
        BigInteger key_generation=BigInteger.valueOf(list.get(get_keyvalues)).multiply(BigInteger.valueOf(list.get(get_key)));
        pkey.add(BigInteger.valueOf(list.get(get_keyvalues)));
            
        int result=key_hard.get(arr_key);
        arr_key+=1;

        BigInteger power_values=BigInteger.valueOf(list.get(get_keyvalues)).pow(Integer.valueOf(String.valueOf(list.get(get_key))));
        BigInteger final_power=power_values.multiply(BigInteger.valueOf(result));

        remainder = final_power.mod(key_generation);
    }
    
    static BigInteger Encryption_Process(int val)
    {
        BigInteger id1=BigInteger.valueOf(val);
        BigInteger ncrypted_unit=id1.add(remainder);
        return ncrypted_unit; 
    }
     
   private static int  power1(int a, int b) 
   {
    int power = 1;
        for(int c = 0; c < b; c++)
            power *= a;
        return power;       
    }
    
   private static BigInteger  power(BigInteger a, BigInteger b) 
   {
    BigInteger power =new BigInteger("1");        
        int d=Integer.valueOf(String.valueOf(b));
        for(int c=0; c < d; c++)
            power =power.multiply(a);
        return power;       
    }
   
    protected static void decrypt()
    {
        int k=1;
        b1=0;

        long tt1=System.nanoTime();
        tds=System.nanoTime();
        System.out.println("\n");
        System.out.println("***************************");
        System.out.println("Decryption Start Time       : "+tds);
        int u1=1;
        k+=1;

        BigInteger sys=s;
        BigInteger dia=d;
        BigInteger mp3=mapee3;
                
        long st1=System.nanoTime();
                
        BigInteger Systolic=Decryption_process(sys);
        BigInteger Diastolic=Decryption_process(dia);
        BigInteger map13=Decryption_process(mp3);        
        BigInteger t2=new BigInteger("3");
        BigInteger map1=map13.divide(t2); 
        System.out.println("DECRYPTED MAP VALUE         : "+map1);
        dmap=map1;
        String hypo="YES HYPOTENSION";
        String mapp1=String.valueOf(map1);
        Integer t=Integer.valueOf(mapp1);
        mape1=t;
        if(t>55)
        {
            hypo="NO HYPOTENSION";
        }
        long st2=System.nanoTime()-st1;
              
        System.out.println("Decryption End Time         : "+System.nanoTime());
        System.out.println("***************************");
        tde=System.nanoTime()-tds;       
    }

    static BigInteger  Decryption_process(BigInteger val)
    {
        BigInteger bigInteger1 =new BigInteger(String.valueOf(val));
        BigInteger n,n1;
        n1=val.mod(pkey.get(b1));       
        return n1;
    }      
   
    
    static int findht(BigInteger mp)
    {
        BigInteger map =new BigInteger(String.valueOf(mp));
        int response=map.compareTo(range.get(b1));
        if(response==1)
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }
    
    
    protected static String analysis()
    {
        int k1=0;      
        String val="55";
        long ana1=System.nanoTime();
        
        tads=System.nanoTime();
        System.out.println("\n");
        System.out.println("***************************");
        System.out.println("Analysis Start Time         : "+tads);        
            
        String hypo="NO HYPOTENSION";
        BigInteger map=mapee3;
        int response=map.compareTo(range.get(k1));
        String ans="";
        if(response==1)
        {
            ans="YES HYPOTENSION";
        }
        else
        {
            ans="NO HYPOTENSION";
        }
        
        int t1=Integer.parseInt(val);
        int t2=mape1;
        if(t2<t1)
        {
            ans="YES HYPOTENSION";
        }
        else
        {
            ans="NO HYPOTENSION";
        }
        System.out.println("ANALYSIS RESULT             : "+ans);
        System.out.println("Analysis End Time           : "+System.nanoTime());
        System.out.println("***************************");
        tade=System.nanoTime()-tads;
        return ans;
    }
    
    
    public static void main (String args[]) throws IOException{
        // String[] bp = args[0].split("/");
        // String sys=bp[0];
        // String dia=bp[1];

      

        try{
            String str;
            FileReader f=new FileReader("./data.txt");
            LineNumberReader lr=new LineNumberReader(f);
            while((str=lr.readLine())!=null)
            {

                 
                Scanner scan = new Scanner(str);
                String[] res = str.split("\\s+");
                String[] pressure = res[5].split("/");
                System.out.println(pressure[0] + " " + pressure[1]);


                System.out.println("\n");
                System.out.println("***************************");
                System.out.println("SYSTOLIC PRESSURE           : "+pressure[0]);
                System.out.println("DIASTOLIC PRESSURE          : "+pressure[1]);
                System.out.println("***************************");


                details(pressure[0], pressure[1]);
                decrypt();
                String op = analysis();
                
                JSONObject obj=new JSONObject();
                obj.put("SYSTOLIC_PRESSURE",s);
                obj.put("DIASTOLIC_PRESSURE",d);
                obj.put("ENCRYPTED_MAP",emap);
                obj.put("DECRYPTED_MAP",dmap);
                obj.put("TEST_REPORT",op);
                System.out.print(obj); 

                Socket socket = new Socket(REMOTE_HOST, REMOTE_PORT);
                BufferedWriter sockOut = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
                sockOut.write(obj.toString(), 0, obj.toString().length());
                sockOut.newLine(); 
                sockOut.flush();
            }
            Socket socket = new Socket(REMOTE_HOST, REMOTE_PORT);
                BufferedWriter sockOut = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
                sockOut.write("stop");
                sockOut.newLine(); 
                sockOut.flush();
        }
        catch(Exception ie)
        {
            System.out.println(ie.getMessage());
        }



        try
        {
            Thread.sleep(3000);
        }
        catch(Exception e){};
                
        // details(sys,dia);
        // decrypt();

        // String op=analysis();
        // System.out.println("\n");
        // System.out.println("***************************");
        // System.out.println("Total Encryption Time       : "+tee);
        // System.out.println("Total Decryption Time       : "+tde);
        // System.out.println("Total Analysis Time         : "+tade);
        // System.out.println("***************************");
        //Value to be pushed to cloud s,d,emap,dmap,op;
        //System.out.println("sys: "+s+",dia: "+d+",encryptmap: "+emap+",decryptmap: "+dmap+",output: "+op);

        //Writing Json Object
        /*
        JSONObject obj=new JSONObject();
        obj.put("SYSTOLIC_PRESSURE",s);
        obj.put("DIASTOLIC_PRESSURE",d);
        obj.put("ENCRYPTED_MAP",emap);
        obj.put("DECRYPTED_MAP",dmap);
        obj.put("TEST_REPORT",op);
        System.out.print(obj); 
        */
        
        // Socket socket = new Socket(REMOTE_HOST, REMOTE_PORT);
        // BufferedWriter sockOut = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream())); 
        // BufferedReader consoleIn = new BufferedReader(new InputStreamReader(System.in)); 
        //String line = " {\"SYSTOLIC_PRESSURE\":\"s\",\"DIASTOLIC_PRESSURE\":\"d\",\"ENCRYPTED_MAP\":\"emap\",\"DECRYPTED_MAP\":\"dmap\",\"TEST_REPORT\":\"op\"} "; 
        // sockOut.write(obj.toString(), 0, obj.toString().length());
        // sockOut.newLine(); 
        // sockOut.flush();
    }
}