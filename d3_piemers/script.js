 import javax.swing.JTextField;
 import java.awt.*;
 import java.awt.event.*;
 import javax.swing.*;
 import java.awt.geom.*;
 import java.util.Arrays;


 public class GraphMaker{


public GraphMaker(Vertex[] a )
  {
    JFrame frame = new JFrame();
    String start = "Start";
    int columns=20;
    String end = "End";
    JTextField startCity = new JTextField(start,columns);
    JTextField endCity = new JTextField(end,columns);
    JButton button = new JButton("Find Path");
    //button.addActionListener(button);

    int length = a.length;
    Vertex current = a[0];
    CityComponent cityPanel = new CityComponent(current);

    /*for(int i=0; i < length; i++){
        Vertex current = a[i];
        g2.draw(new Line2D.Double(x,y,x,y));
    }*/

    JPanel panel = new JPanel();

    panel.setLayout(new FlowLayout());

    panel.add(startCity);
    panel.add(endCity);
    panel.add(button);

    frame.setLayout(new BorderLayout());
    frame.add(cityPanel,BorderLayout.CENTER);
    frame.add(panel,BorderLayout.SOUTH);

    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.pack();
    frame.setVisible(true);


}

 public void actionPerformed(ActionEvent e) {
        return;
 }
}

import javax.swing.*;
import java.awt.*;

public class CityComponent extends JComponent {

private Vertex m;
private int x = 0;
private int y = 0;

public CityComponent(Vertex m) {
   this.m = m;
}

public void paintComponent(Graphics g) {

    Graphics2D g2 = (Graphics2D)g;
    m.draw(g2);

}

} 


import java.awt.*;
import java.awt.geom.*;
import java.util.*;

public class Vertex{

public String element;
public Double x;
public Double y;


public Vertex(String city, String a, String b){
    this.element = city;
    this.x = Double.parseDouble(a);
    this.y = Double.parseDouble(b);

}

public void draw(Graphics2D g2){



Point2D.Double r1 = new Point2D.Double(x/10, y/10);
Line2D.Double line = new Line2D.Double(r1,r1);

  g2.draw(line);
}
}







