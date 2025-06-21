// Import the necessary AWS SDK clients
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Create a standard DynamoDB client
const client = new DynamoDBClient({});

// Create the DynamoDB Document Client, which simplifies working with JSON data
const docClient = DynamoDBDocumentClient.from(client);

// Export the Document Client for use in other parts of our application
export default docClient;