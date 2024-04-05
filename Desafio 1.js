import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class DespesaCalculator {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Despesa Calculator");
        JPanel panel = new JPanel();
        JLabel[] labels = {
            new JLabel("Aluguel:"),
            new JLabel("Água:"),
            new JLabel("Energia Elétrica:"),
            new JLabel("Folha de Pagamento:"),
            new JLabel("Impostos:"),
            new JLabel("Outros:")
        };
        JTextField[] fields = new JTextField[labels.length];
        JButton calculateButton = new JButton("Calcular");
        JTextArea resultArea = new JTextArea();

        // Configuração do painel
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        for (int i = 0; i < labels.length; i++) {
            panel.add(labels[i]);
            fields[i] = new JTextField();
            panel.add(fields[i]);
        }
        panel.add(calculateButton);

        // Configuração do frame
        frame.add(panel);
        frame.add(resultArea);
        frame.pack();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        // Configuração do botão calcular
        calculateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                double total = 0;
                for (JTextField field : fields) {
                    total += Double.parseDouble(field.getText());
                }
                double average = total / fields.length;
                double annualEstimate = total * 12;
                resultArea.setText("Total: " + total + "\nMédia: " + average + "\nEstimativa Anual: " + annualEstimate);
            }
        });
    }
}
